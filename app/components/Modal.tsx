"use client";

type ModalProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-secondary border border-steel p-10 w-full max-w-2xl"
      >
        <div className="flex items-center justify-between border-b border-charcoal/20 pb-6">
          <h2 className="text-xs uppercase tracking-widest">{title}</h2>
          <button
            className="w-11 h-11 flex items-center justify-center cursor-pointer"
            onClick={onClose}
            aria-label="stäng ruta"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
