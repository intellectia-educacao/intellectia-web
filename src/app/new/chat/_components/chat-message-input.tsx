import { IconSend } from "@/components/icons/icon-send";
import { ChatRequestOptions } from "ai";
import { useRef, useEffect, FormEvent, ChangeEvent, Dispatch, SetStateAction } from "react";

type ChatMessageInputProps = {
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  input: string; // Esse valor vem do componente pai
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  firstMessage: boolean;
}

export function ChatMessageInput({ disabled, input, handleInputChange, handleSubmit, firstMessage }: ChatMessageInputProps) {
  const textEl = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textEl.current) {
      textEl.current.style.height = '0px';
      let scrollHeight = textEl.current.scrollHeight;
      textEl.current.style.height = scrollHeight + 'px';
    }
  }, [input]);

  useEffect(() => {
    if (textEl.current) {
      textEl.current.focus();
    }
  }, [input, disabled]);

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    console.log(input);
    handleSubmit(e);
  }

  // Simular o evento de input e disparar a mudança no campo
  useEffect(() => {
    if (firstMessage && textEl.current) {
      // Criar um evento de mudança falso
      const fakeEvent = {
        target: {
          value: "Iniciar",
        },
      } as ChangeEvent<HTMLTextAreaElement>;

      handleInputChange(fakeEvent); // Disparar o handleInputChange manualmente com o valor "Iniciar"
    }
  }, [firstMessage, handleInputChange]);

  return (
    <form onSubmit={handleSendMessage} className={`flex items-center w-full md:max-w-3xl border-2 bg-primary-foreground border-primary/25 p-2 text-slate-100 rounded-[26px] ${disabled && 'opacity-50'}}`}>
      <textarea 
        ref={textEl}
        className="flex-1 border-0 bg-transparent resize-none outline-none h-6 max-h-44 overflow-y-auto pl-2 placeholder-slate-200"
        placeholder={"Escreva algo"}
        value={input} // O valor controlado ainda vem do pai
        onChange={handleInputChange} // Aqui, o valor é atualizado diretamente no pai
        disabled={disabled || firstMessage}
      >
      </textarea>

      <button disabled={disabled || (input.length === 0 && !firstMessage)} type="submit" className={`w-8 h-8 flex justify-center items-center rounded-full self-end ${(!disabled && input.length || firstMessage) ? 'cursor-pointer md:hover:bg-white/20' : 'opacity-40'}`}>
        <IconSend width={18} height={18} className="text-white" />
      </button>
    </form>
  );
}
