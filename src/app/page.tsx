"use client";
import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero"; // Componente Hero
import PricingCard from "@/components/PricingCard";
import StackTech from "@/components/StackTech"; // Componente para mostrar tecnologías
import ProjectCard from "@/components/ProjectCard";
import FloatingContactButton from "@/components/FloatingContactButton";
import Footer from "@/components/Footer"; // Componente Footer
import ThemeToggle from "@/components/ThemeToggle";
import Testimonials from "@/components/Testimonials";
import { Layout, MonitorCheck, CreditCard, TrendingUp } from "lucide-react"; // Íconos Lucide
import Head from "next/head";

const planes = [
  {
    title: "Básico",
    price: "$99",
    features: ["Landing page", "Diseño responsivo", "SEO básico"],
  },
  {
    title: "Profesional",
    price: "$199",
    features: [
      "Todo lo del Básico",
      "Integración con Stripe",
      "Dashboard personalizado",
    ],
    highlight: true,
  },
  {
    title: "Empresarial",
    price: "$299",
    features: [
      "E-commerce completo",
      "Base de datos Supabase",
      "Soporte prioritario",
    ],
  },
];

const servicios = [
  {
    icon: Layout,
    title: "Landing pages modernas",
    desc: "Sitios rápidos, responsivos y atractivos para destacar tu marca.",
  },
  {
    icon: MonitorCheck,
    title: "Dashboards personalizados",
    desc: "Interfaces intuitivas para visualizar y controlar tu negocio.",
  },
  {
    icon: CreditCard,
    title: "Integraciones con Stripe y Supabase",
    desc: "Procesos de pago y backend escalables listos para producción.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    desc: "Optimización técnica para lograr posicionamiento y velocidad.",
  },
];

export default function HomePage() {
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
  //   e.preventDefault();

  //   const isValid = validate();
  //   if (!isValid) return;
  //   if (Object.keys(errors).length > 0) {
  //     setErrors(errors);
  //     return;
  //   }

  //   try {
  //     const response = await emailjs.send(
  //       "service_ibhshin", // SERVICE_ID
  //       "template_jtvp", // TEMPLATE_ID
  //       {
  //         from_name: form.name,
  //         from_email: form.email,
  //         message: form.message,
  //       },
  //       "uLjRvyvySCL-r48dT"
  //     );

  //     console.log("Mensaje enviado:", response.text);
  //     alert("✅ ¡Mensaje enviado con éxito!");
  //     setForm({ name: "", email: "", message: "" }); // Limpiar formulario
  //     setErrors({});
  //   } catch (err) {
  //     console.error("Error al enviar:", err);
  //     alert("❌ Hubo un error al enviar el mensaje");
  //   }
  // };

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
    <ThemeProvider attribute="class" defaultTheme="dark">>
      <Head>
        <title>Desarrollo Web Freelance | Sitios modernos y rapidos</title>
        <meta
          name="description"
          content="Desarrollador web freelance. Diseño sitios modernos, rápidos y responsivos para negocios y emprendedores. ¡Impulsa tu presencia online!"
        />
        <meta
          name="keywords"
          content="desarrollador web, freelance, diseño web, sitios responsivos, landing page, programación, servicios web"
        />
        <meta name="author" content="DarchezDev" />

        {/* OpenGraph para compartir en Facebook, WhatsApp, etc. */}
        <meta
          property="og:title"
          content="Desarrollador Web Freelance | Sitios Modernos y Rápidos"
        />
        <meta
          property="og:description"
          content="Diseño y desarrollo de sitios web modernos, rápidos y profesionales para negocios y emprendedores."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.com/" />
        <meta
          property="og:image"
          content="https://tu-dominio.com/imagen-og.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Desarrollador Web Freelance | Sitios Modernos y Rápidos"
        />
        <meta
          name="twitter:description"
          content="Diseño y desarrollo de sitios web modernos, rápidos y profesionales para negocios y emprendedores."
        />
        <meta
          name="twitter:image"
          content="https://tu-dominio.com/imagen-twitter.jpg"
        />
      </Head>
      <ThemeToggle />
      <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950 px-6 py-12">
        <FloatingContactButton />
        {/* HERO SECTION --------------------------------------------------------------------------------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Hero />
        </motion.div>
        {/* PROYECTOS SECTION --------------------------------------------------------------------------------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.section
            id="proyectos"
            className="py-16 bg-grey-600 dark:bg-neutral-950"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <section
              id="proyectos"
              className="py-16 px-6 bg-grey-600 dark:bg-neutral-950"
            >
              <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Proyectos Destacados
                </motion.h2>
                <motion.p
                  className="text-neutral-800 dark:text-neutral-400 mb-12 max-w-xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Aquí puedes ver algunos de mis trabajos más recientes, donde
                  aplico las últimas tecnologías y mejores prácticas de
                  desarrollo web.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                      title="Landing Page para Agencia Creativa"
                      image="/projects/landing-agencia.jpg"
                      type="Freelance"
                      description="Diseño y desarrollo de una landing responsive para una agencia de diseño en Buenos Aires."
                      liveUrl="https://cliente-ejemplo.com"
                      githubUrl="https://github.com/amaroweb/landing-agencia"
                    />
                    <ProjectCard
                      title="Dashboard Cripto Personal"
                      image="/projects/dashboard-crypto.jpg"
                      type="Personal"
                      description="App de visualización de portafolio cripto con React + Tailwind + API externa."
                      liveUrl="https://amaroweb-crypto.vercel.app"
                      githubUrl="https://github.com/amaroweb/crypto-dashboard"
                    />
                    <ProjectCard
                      title="Clon de Loom"
                      image="/projects/loom-clone.jpg"
                      type="Demo"
                      description="Clon funcional de Loom para mostrar habilidades con Next.js, Tailwind y grabación de pantalla."
                      githubUrl="https://github.com/amaroweb/loom-clone"
                    />
                  </div>
                </motion.div>
              </div>
            </section>
          </motion.section>
        </motion.div>

        {/* STACK SECTION --------------------------------------------------------------------------------------------*/}
        <StackTech />

        {/* SERVICIOS SECTION --------------------------------------------------------------------------------------------*/}
        <section className="max-w-6xl mx-auto mt-20 px-4">
          <h2 className="text-gray-700 text-2xl font-semibold text-center mb-10">
            Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicios.map((servicio, i) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="bg-gray-100 text-neutral-900 dark:bg-neutral-900 dark:text-white border border-gray-200 shadow-sm dark:border-neutral-800 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <servicio.icon className="w-6 h-6 text-gray-700 dark:text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {servicio.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-neutral-400 mt-1">
                        {servicio.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PLANES SECTION --------------------------------------------------------------------------------------------*/}
        <section className="max-w-5xl mx-auto mt-20">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gray-700 text-2xl font-semibold mb-6 text-center">
              Planes de Servicio
            </h2>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planes.map((plan, i) => (
                <PricingCard key={plan.title} {...plan} index={i} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* EJEMPLOS SECTION --------------------------------------------------------------------------------------------*/}
        <section className="max-w-5xl mx-auto mt-20">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Inspiraciones de diseño
            </h2>
          </motion.h2>
          <motion.p
            className="dark:text-neutral-400 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-900 dark:text-neutral-400 text-center mb-10">
              Estos sitios son ejemplos de calidad visual y técnica que puedo
              tomar como referencia para crear tu web.
            </p>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Loom",
                  url: "https://www.loom.com",
                  desc: "Diseño limpio con foco en conversiones",
                },
                {
                  title: "Superlist",
                  url: "https://www.superlist.com",
                  desc: "Animaciones suaves y experiencia moderna",
                },
                {
                  title: "TypingMind",
                  url: "https://www.typingmind.com",
                  desc: "Aplicación web simple y profesional",
                },
              ].map((site, i) => (
                <motion.div
                  key={site.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-gray-200 dark:bg-neutral-900 border border-gray-200 shadow-sm dark:border-neutral-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-1">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {site.title}
                    </a>
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-400">
                    {site.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <Testimonials />
        {/* CONTACTO SECTION --------------------------------------------------------------------------------------------*/}
        <section className="max-w-xl mx-auto mt-20" id="contacto">
          <AnimatePresence>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-neutral-700 dark:text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Contacto
              </h2>
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
                    className="w-full px-4 py-2 rounded bg-neutral-200 text-neutral-900 dark:bg-neutral-800 placeholder-grey-900 dark:text-white dark:placeholder-neutral-500"
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
                    className="w-full px-4 py-2 rounded bg-neutral-200 text-neutral-900 placeholder-grey-900 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
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
                    className="w-full px-4 py-2 rounded bg-neutral-200 text-neutral-900 placeholder-grey-900 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
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
        {/* FOOTER SECTION --------------------------------------------------------------------------------------------*/}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
