import { Alert } from "@/components/alert";
import { Container } from "@/components/container";
import { Stack } from "@/components/stack";
import { Text } from "@/components/text";
import { useDeleteBarbecue, useListBarbecueById } from "@/query";
import { getDate } from "@/utils/date";
import Decimal from "decimal.js";
import { format } from "timeago.js";

import styles from './index.module.css'
import { Button } from "@/components/button";
import { formatCurrencyToReal } from "@/utils/formatCurrency";

interface BarbecueDetailsProps {
  barbecueId: number;
  onClose: () => void;
  onDelete: () => void;
}

export function BarbecueDetails({ barbecueId, onClose, onDelete }: BarbecueDetailsProps) {
  const { data, isLoading } = useListBarbecueById(barbecueId)
  const { mutateAsync } = useDeleteBarbecue()

  const date = data?.date ? getDate(data.date) : null
  const timeago = date ? format(date, 'pt_BR') : ''

  const sumTotal = data?.attendees.reduce((acc, attendee) => {
    return new Decimal(acc).add(attendee.fee).toNumber()
  }, 0)

  async function handleDeleteBarbecue() {
    const deleteConfirm = confirm('Tem certeza que deseja excluir o churras?')

    if (deleteConfirm) {
      await mutateAsync({
        id: barbecueId.toString(),
        data: {
          id: barbecueId
        }
      })

      onDelete()
    }
  }

  return (
    <Container
      title="Detalhes do churras"
      breadcrumb={['Detalhes do churras', timeago]}
      onClose={onClose}
    >
      {isLoading && (
        <Stack full align="center" justify="center">
          Carregando...
        </Stack>
      )}

      {data && (
        <Stack gap="md">
          <Stack direction="row" gap="md" style={{ width: '100%' }}>
            <Alert title="Nome do churras" hideIcon>
              {data.description}
            </Alert>

            <Alert title="Data do churras" hideIcon>
              {date && date.toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })}
            </Alert>

            <Alert title="Endereço" hideIcon>
              {data.address}
            </Alert>
          </Stack>

          <Stack gap="md">
            <Text>
              Participantes
            </Text>

            <table className={styles.table}>
              <thead>
                <tr>
                  <td>
                    <Text color="secondary">
                      Nome
                    </Text>
                  </td>

                  <td>
                    <Text color="secondary">
                      Contribuição
                    </Text>
                  </td>
                </tr>
              </thead>

              <tbody>
                {data.attendees.map((attendee) => (
                  <tr key={attendee.id}>
                    <td>{attendee.name}</td>
                    <td>{formatCurrencyToReal(attendee.fee)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Stack>

          <Stack direction="row" gap="md">
            <Alert title="Quantidade de pessoas" hideIcon>
              {data.attendees.length}
            </Alert>

            <Alert title="Valor total" hideIcon>
              {formatCurrencyToReal(sumTotal || 0)}
            </Alert>
          </Stack>

          <Stack align="flex-end">
            <Button onClick={handleDeleteBarbecue}>
              Excluir churras
            </Button>
          </Stack>
        </Stack>
      )}
    </Container>
  )
}