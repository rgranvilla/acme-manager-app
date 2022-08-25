import { PropsWithChildren } from "react";

import { PatientsProvider } from "./patients";

export default function AppProvider({
  children,
}: PropsWithChildren): JSX.Element {
  return <PatientsProvider>{children}</PatientsProvider>;
}
