import Link from "next/link";

type ButtonProps = {
  label: string;
  btnType: "primary" | "secondary";
  url: string;
};

function LinkButton({ label, url, btnType }: ButtonProps) {
  return (
    <Link className={`link link-${btnType}`} href={url}>
      {label}
    </Link>
  );
}

export default LinkButton;
