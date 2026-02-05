"use client";

import ErrorMessage from "@/components/ErrorMessage";

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

export default function RootError({ error, reset }: Readonly<RootErrorProps>) {
  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="502"
      content="Ocorreu um error do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde"
    />
  );
}
