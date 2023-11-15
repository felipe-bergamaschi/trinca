import { Icon } from "@/components/icon";
import { Stack } from "@/components/stack";
import { Text } from "@/components/text";

import styles from './index.module.css'
import { ListBarbecueResponseItem } from "@/query";
import { formatCurrencyToReal } from "@/utils/formatCurrency";
import Decimal from "decimal.js";
import { format } from 'timeago.js';
import { getDate } from "@/utils/date";

interface EventListDetailsProps {
  data: ListBarbecueResponseItem;
  onClick: () => void;
}

export function EventListDetails({ data, onClick }: EventListDetailsProps) {
  const date = getDate(data.date)

  const sumTotal = data.attendees.reduce((acc, attendee) => {
    return new Decimal(acc).add(attendee.fee).toNumber()
  }, 0)

  return (
    <Stack
      padding="md"
      gap="sm"
      className={styles.container}
      onClick={onClick}
    >
      <Text size="sm" color="secondary">{format(date, 'pt_BR')}</Text>

      <Stack direction="row" gap="md">
        <Stack align="center" gap="sm">
          <Text variant="h1">
            {date.getDate()}
          </Text>

          <Text color="secondary">
            {date.toLocaleString('pt-BR', { weekday: 'short' })}
          </Text>
        </Stack>

        <Stack gap="sm" full>
          <Text variant="h3">
            {data.description}
          </Text>

          <Stack direction="row" gap="sm">
            <Icon name="place" color="var(--text-secondary)" />

            <Text color="secondary" variant="h5">
              {data.address}
            </Text>
          </Stack>

          <Stack direction="row" justify="space-between" full>
            <Stack direction="row" gap="sm" align="center">
              <Icon name="group" color="var(--text-secondary)" />

              <Text color="secondary">
                {data.attendees.length}
              </Text>
            </Stack>

            <Stack direction="row" gap="sm" align="center">
              <Icon name="paid" color="var(--text-secondary)" />

              <Text color="secondary">
                {formatCurrencyToReal(sumTotal)}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}