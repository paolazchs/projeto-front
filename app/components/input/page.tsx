interface InputProps {
  type?: string;
  placeholder?: string;
}

export default function InputPage({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-[27vw] h-[10vh] border-none bg-[#FFFDF1] rounded-sm placeholder:px-8 font-semibold placeholder:text-[#5F8861]"
    />
  );
}
