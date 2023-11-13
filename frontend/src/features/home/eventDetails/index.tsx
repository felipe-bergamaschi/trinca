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

interface FormValues {
  date: string;
  address: string;
  description: string;
  people: {
    id: number
    name: string;
    amount: string;
  }[];
}

export function EventDetails() {
  const [people, setPeople] = useState<FormValues['people']>([])

  function addPeople() {
    setPeople([...people, { name: '', amount: '', id: Math.random() }])
  }

  function removePeople(id: number) {
    setPeople(people.filter((item) => item.id !== id))
  }

  return (
    <Container
      title="Novo Churras"
      breadcrumb={['Novo Churras']}
    >
      <Formik
        initialValues={{} as FormValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values })
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {({
          handleSubmit,
          values,
          // errors,
          // touched,
          handleChange,
          // handleBlur,
          // isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box title="Preencha os dados">
              <Stack direction="row" gap="md">
                <TextField
                  label="Data"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={handleChange}
                />

                <TextField
                  label="Endereço"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                />

                <TextField
                  label="Descrição"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </Stack>

              <Text>
                Participantes do churras
              </Text>

              <Button onClick={addPeople}>
                Novo participante
              </Button>

              {people.map((item, index) => (
                <Stack direction="row" gap="md" key={item.id}>
                  <TextField
                    label="Nome"
                    name={`people[${index}].name`}
                    value={values.people?.[index]?.name}
                    onChange={handleChange}
                  />

                  <TextField
                    label="Valor"
                    name={`people[${index}].amount`}
                    value={values.people?.[index]?.amount}
                    onChange={handleChange}
                  />

                  <IconButton
                    name="delete"
                    onClick={() => removePeople(item.id)}
                  />
                </Stack>
              ))}
            </Box>
          </form>
        )}
      </Formik>

    </Container>
  )
}