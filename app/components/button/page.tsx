interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function ButtonPage({children} : ButtonProps ){
    return(
        <button  className="w-[27vw] h-[10vh] border-none bg-[#FFF9D8] rounded-sm">
            {children}
        </button>
    );
}
