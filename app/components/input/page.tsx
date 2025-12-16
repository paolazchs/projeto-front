interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPage({ type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-[27vw] h-[10vh] border-none bg-[#FFFDF1] rounded-sm font-semibold placeholder:px-8 placeholder:text-[#5F8861]"
    />
  );
}
