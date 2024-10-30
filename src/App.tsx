import { useState } from 'react';
import BonTalk from "@bonvies/bontalk";
// const [open, setOpen] = useState(false);

function App() {
  const [bonTalk, setBonTalk] = useState<BonTalk | null>(null);

  const handleOpenPanel = () => {
    if (bonTalk) {
      bonTalk.togglePanel();
      return
    }
    // create an usable sip phone instance
    const bonTalkInstance = new BonTalk({
      wsServer: "wss://bonuc.sbc.telesale.org:7443/ws",
      domains: ["bonuc.sbc.telesale.org"],
      username: "3004",
      password: "1234",
      displayName: "Leo",
    });
    bonTalkInstance.init();
    setBonTalk(bonTalkInstance);
  };

  return (
    <>
      <h1>Bontalk app test</h1>
      <button
        onClick={handleOpenPanel}
      >
        Start BonTalk App
      </button>
    </>
  )
}

export default App
