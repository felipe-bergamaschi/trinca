"use client";

import { Stack } from "@/components/stack";
import { Text } from "@/components/text";

import { TextField } from "@/components/form/textField";
import { Container } from "@/components/container";
import { Box } from "@/components/box";

import { Formik } from "formik";
import { Button } from "@/components/button";
import { IconButton } from "@/components/iconButton";
import { useState } from "react";
import { formatCurrencyOnInput, formatCurrencyToReal, formatCurrencyToSubmit } from "@/utils/formatCurrency";
import toast from "react-hot-toast";
import { z } from "zod";
import { useCreateBarbecue } from "@/query";
import { Alert } from "@/components/alert";
import Decimal from "decimal.js";

interface FormValues {
  date: string;
  address: string;
  description: string;
  attendees: {
    name: string;
    fee: string;
  }[];
}

interface EventDetailsProps {
  refetch: () => void;
}

export function EventDetails({ refetch }: EventDetailsProps) {
  const { mutateAsync } = useCreateBarbecue()

  const [attendees, setAttendees] = useState<FormValues['attendees']>([])
  const [formKey, setFormKey] = useState(Math.random())

  function addAttendees() {
    setAttendees([...attendees, { name: '', fee: '' }])
  }

  function sumTotal(values: FormValues['attendees']) {
    if (!values) return formatCurrencyToReal(0)

    const sum = values.reduce((acc, attendee) => {
      const fee = formatCurrencyToSubmit(attendee?.fee || '0') || 0;

      return new Decimal(acc).add(fee).toNumber()
    }, 0)

    return formatCurrencyToReal(sum)
  }

  async function handleSubmit(values: FormValues) {
    try {
      const validated = schema.parse(values)

      await mutateAsync({
        data: validated
      })

      refetch()

      toast.success('Churras criado com sucesso! 123')
    } catch (error) {
      let message = 'Erro ao criar churras'

      if (error instanceof z.ZodError) {
        message = error.issues[0].message
      }

      toast.error(message)

      throw error
    }
  }

  return (
    <Container
      title="Novo Churras"
      breadcrumb={['Novo Churras']}
    >
      <Formik
        initialValues={{} as FormValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values).then(() => {
            resetForm();
            setAttendees([])
            setFormKey(Math.random())
          }).finally(() => {
            setSubmitting(false);
          });
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          isSubmitting,
          setValues
        }) => (
          <form onSubmit={handleSubmit} key={formKey}>
            <Box title="Preencha os dados" buttonDisabled={isSubmitting}>
              <Stack direction="row" gap="md">
                <TextField
                  label="Nome do churras"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />

                <TextField
                  label="Endereço"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                />

                <TextField
                  label="Data"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                />
              </Stack>

              <Text>
                Participantes do churras
              </Text>

              <Button onClick={addAttendees}>
                Novo participante
              </Button>

              {attendees.map((_, index) => (
                <Stack direction="row" gap="md" key={index}>
                  <TextField
                    label="Nome"
                    name={`attendees[${index}].name`}
                    value={values.attendees?.[index]?.name}
                    onChange={handleChange}
                  />

                  <TextField
                    label="Valor"
                    name={`attendees[${index}].fee`}
                    value={values.attendees?.[index]?.fee}
                    onChange={(e) => {
                      const value = formatCurrencyOnInput(e.target.value)

                      handleChange({
                        target: {
                          name: `attendees[${index}].fee`,
                          value,
                        }
                      })
                    }}
                  />

                  <IconButton
                    name="delete"
                    onClick={() => {
                      if (!values.attendees) {
                        setAttendees(attendees.filter((_, i) => i !== index))

                        return
                      }

                      const filterData = values.attendees.filter((_, i) => i !== index)

                      setValues({
                        ...values,
                        attendees: filterData
                      })

                      setAttendees(filterData)
                    }}
                  />
                </Stack>
              ))}

              <Stack direction="row" gap="md">
                <Alert title="Quantidade de pessoas">
                  {attendees.length}
                </Alert>

                <Alert title="Valor total">
                  {sumTotal(values.attendees)}
                </Alert>

                {attendees.length > 0 && (
                  <Stack style={{ minWidth: 48 }}>
                    <span />
                  </Stack>
                )}
              </Stack>
            </Box>
          </form>
        )}
      </Formik>

    </Container>
  )
}

const schema = z.object({
  description: z
    .string({ required_error: 'Nome do churras é obrigatório' })
    .min(3, { message: 'Nome do churras deve ter no mínimo 3 caracteres' }),
  address: z
    .string({ required_error: 'Endereço é obrigatório' })
    .min(3, { message: 'Endereço deve ter no mínimo 3 caracteres' }),
  date: z
    .string({ required_error: 'Data é obrigatória' })
    .min(3, { message: 'Data deve ter no mínimo 3 caracteres' }),
  attendees: z.array(z.object({
    name: z
      .string({ required_error: 'Nome do participante é obrigatório' })
      .min(3, { message: 'Nome do participante deve ter no mínimo 3 caracteres' }),
    fee: z
      .string({ required_error: 'Valor do participante é obrigatório' })
      .min(3, { message: 'Valor do participante deve ter no mínimo 3 caracteres' }),
  }), { required_error: 'Participantes é obrigatório' })
}).transform((data) => {
  return {
    ...data,
    date: new Date(data.date).toISOString(),
    attendees: data.attendees.map((attendee) => ({
      ...attendee,
      fee: formatCurrencyToSubmit(attendee.fee)
    }))
  }
})