export default function Button({ children, ...props }) {
  return (
    <button className="bg-red" {...props}>
      {children}
    </button>
  );
}
