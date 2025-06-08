import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

export default function Projects() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formVisible, setFormVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "El nombre es obligatorio";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Email inválido";
    if (!form.message) newErrors.message = "El mensaje no puede estar vacío";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    setLoading(true);
    setFeedback(null);

    try {
      await emailjs.send(
        "service_ibhshin",
        "template_b0q7i8m",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          title: "Nuevo mensaje desde el portafolio",
        },
        "uLjRvyvySCL-r48dT"
      );

      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setFeedback({
        type: "success",
        message: "✅ ¡Mensaje enviado con éxito!",
      });

      // Oculta el formulario con fade-out
      setFormVisible(false);

      // ⏱ Volver a mostrarlo automáticamente a los 5 segundos
      setTimeout(() => {
        setFeedback(null);
        setFormVisible(true);
      }, 5000);
    } catch (err) {
      console.error("Error al enviar:", err);
      setFeedback({
        type: "error",
        message: "❌ Hubo un error al enviar el mensaje",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-xl mx-auto mt-20" id="contacto">
      <AnimatePresence>
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-neutral-700 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Contacto</h2>
        </motion.h2>
        {formVisible && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-neutral-100 text-neutral-900 dark:bg-neutral-800 placeholder-grey-900 dark:text-white dark:placeholder-neutral-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-neutral-100 text-neutral-900 placeholder-grey-900 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Mensaje"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-neutral-100 text-neutral-900 placeholder-grey-900 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
      {!formVisible && feedback?.type === "success" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6 text-green-400 text-lg"
        >
          {feedback.message}
        </motion.div>
      )}
    </section>
  );
}
