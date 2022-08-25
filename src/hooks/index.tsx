import { PropsWithChildren } from "react";
import { ToastContainer, toast } from "react-toastify";

import { PatientsProvider } from "./patients";

export default function AppProvider({
  children,
}: PropsWithChildren): JSX.Element {
  return <PatientsProvider>{children}</PatientsProvider>;
}
