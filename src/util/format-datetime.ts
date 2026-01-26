import { format, formatDistanceToNow } from "date-fns";
import { pt, ptBR } from "date-fns/locale";

export function formatDateTime(rowDate: string): string {
  const date = new Date(rowDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatRelativeDate(rowndate: string): string {
  const date = new Date(rowndate);

  return formatDistanceToNow(date, {
    locale: pt,
    addSuffix: true,
  });
}
