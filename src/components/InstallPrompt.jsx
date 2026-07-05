import { useState, useEffect } from "react";
import "../styles/install.css";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    const ios = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    setIsIOS(ios);

    if (isStandalone) return; // already installed, don't show anything

    if (ios) {
      setShowButton(true);
      return;
    }

    function handleBeforeInstallPrompt(e) {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  async function handleInstallClick() {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowButton(false);
    }
    setDeferredPrompt(null);
  }

  if (!showButton) return null;

  return (
    <>
      <button className="install-btn" onClick={handleInstallClick}>
        ⬇ Install App
      </button>

      {showIOSInstructions && (
        <div className="modal-overlay" onClick={() => setShowIOSInstructions(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Install FloosTrack</h2>
            <p style={{ opacity: 0.8, fontSize: 14, lineHeight: 1.6 }}>
              1. Tap the <strong>Share</strong> button (square with an arrow) at the bottom of Safari.<br /><br />
              2. Scroll down and tap <strong>"Add to Home Screen"</strong>.<br /><br />
              3. Tap <strong>"Add"</strong> in the top right.
            </p>
            <button className="btn income-btn" style={{ width: "100%", marginTop: 16 }} onClick={() => setShowIOSInstructions(false)}>
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}