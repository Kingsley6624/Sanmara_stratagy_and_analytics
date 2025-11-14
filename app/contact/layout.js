import ToastProvider from "@/components/ToastProvider";

export default function ContactLayout({ children }) {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
}
