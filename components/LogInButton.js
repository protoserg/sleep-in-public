import { useRouter } from "@react-navigation/native";

const LogInButton = (children, onClick) => {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) onClick();
    {
      router.push("/dashboard");
    }
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Get Started
    </button>
  );
};

export default LogInButton;
