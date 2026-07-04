import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/modal.css";

export default function ProfileModal({ user, onClose }) {
  const [name, setName] = useState(user.displayName || "");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    await updateProfile(auth.currentUser, { displayName: name.trim() });
    setSaving(false);
    onClose();
    window.location.reload();
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Profile</h2>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoFocus
          />

          <label>Email</label>
          <input type="email" value={user.email} disabled />

          <div className="modal-buttons">
            <button type="button" className="btn cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn income-btn" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}