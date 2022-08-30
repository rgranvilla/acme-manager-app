import { useEffect, useState } from "react";
import { Layout } from "../../Layout";
import { Erro404 } from "../../Modulos/Erro404";

export function InexistentPage() {
  const [is404, setIs404] = useState<boolean>(false);

  useEffect(() => {
    setIs404(true);
  }, []);

  return <Layout rightSide={<Erro404 />} isErrorPage={is404} />;
}
