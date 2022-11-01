// T extends U  ? X

type NonNullish<T> = T extends null | undefined ? never : T;

type EmailRecipient = string | string[] | null | undefined;

