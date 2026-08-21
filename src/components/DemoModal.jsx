import { Modal, Button } from 'react-bootstrap';
import { CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function DemoModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="tw-border-b tw-border-slate-100">
        <Modal.Title className="tw-flex tw-items-center tw-gap-2 tw-text-lg tw-font-semibold tw-text-slate-800">
          <ShieldCheck className="tw-text-emerald-500" size={22} />
          Prefixing aktiv & Konfliktfrei
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="tw-p-6">
        <p className="tw-text-slate-600 tw-leading-relaxed tw-mb-4">
          Durch das Präfix <code className="tw-bg-slate-100 tw-text-pink-600 tw-px-1.5 tw-py-0.5 tw-rounded tw-font-mono">tw-</code> kollidieren Bootstrap-Komponenten wie Modals oder Dropdowns nicht mit Tailwind-Layout-Klassen.
        </p>
        
        <div className="tw-flex tw-items-center tw-gap-3 tw-bg-emerald-50 tw-text-emerald-800 tw-p-3 tw-rounded-xl tw-border tw-border-emerald-200">
          <CheckCircle2 size={20} className="tw-text-emerald-600 tw-shrink-0" />
          <span className="tw-text-sm tw-font-medium">
            Bootstrap JS-Logik + Tailwind Styling
          </span>
        </div>
      </Modal.Body>
      
      <Modal.Footer className="tw-border-t tw-border-slate-100">
        <Button variant="secondary" onClick={onHide}>
          Schließen
        </Button>
        <Button variant="primary" onClick={onHide} className="tw-shadow-sm">
          Verstanden
        </Button>
      </Modal.Footer>
    </Modal>
  );
}