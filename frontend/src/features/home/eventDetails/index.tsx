import { Stack } from "@/components/stack";
import { Text } from "@/components/text";

import { TextField } from "@/components/form/textField";
import { Container } from "@/components/container";
import { Box } from "@/components/box";

export function EventDetails() {
  return (
    <Container
      title="Novo Churras"
      breadcrumb={['Novo Churras']}
    >
      <Box title="Preencha os dados">
        <Stack direction="row" gap="md">
          <TextField label="Data" name="asd" type="date" />

          <TextField label="Endereço" name="asd" />

          <TextField label="Descrição" name="asd" />
        </Stack>

        <Text>
          Participantes do churras
        </Text>

        <Stack direction="row" gap="md">
          <TextField label="Nome" name="asd" />
          <TextField label="Telefone" name="asd" />
        </Stack>
      </Box>
    </Container>
  )
}