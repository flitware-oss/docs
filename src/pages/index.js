import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const GUIDES = [
  {
    to: '/docs/cuenta/perfil',
    title: 'Mi perfil',
    text: 'Tus datos, tu correo de acceso y la actividad reciente de tu cuenta.',
  },
  {
    to: '/docs/cuenta/usuarios',
    title: 'Usuarios',
    text: 'Crea y administra las cuentas de tu equipo: roles, activación y accesos.',
  },
  {
    to: '/docs/cuenta/seguridad',
    title: 'Seguridad',
    text: 'Contraseña, doble factor (2FA) y control de sesiones activas.',
  },
  {
    to: '/docs/cuenta/tenant',
    title: 'Datos de la empresa',
    text: 'Razón social, zona horaria, correos de alerta y país de facturación.',
  },
  {
    to: '/docs/cuenta/campos-personalizados',
    title: 'Campos personalizados',
    text: 'Agrega los datos propios de tu operación a cada módulo.',
  },
  {
    to: '/docs/cuenta/facturacion',
    title: 'Facturación',
    text: 'Tu plan, suscripción, facturas y consumo de cada cupo.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--flitware', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Guía de usuario de Flitware
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/cuenta/perfil">
            Empezar la guía
          </Link>
        </div>
      </div>
    </header>
  );
}

const MORE_GUIDES = [
  {
    heading: 'Soporte',
    text: 'Pide ayuda y sigue tus solicitudes hasta el cierre.',
    items: [
      {
        to: '/docs/soporte/solicitudes',
        title: 'Solicitudes de soporte',
        text: 'Crea solicitudes, conversa con soporte y ciérralas al resolver.',
      },
    ],
  },
  {
    heading: 'Módulos de operación',
    text: 'El día a día de tu flota: vehículos, conductores, documentos, servicios y mantenimiento.',
    items: [
      {to: '/docs/operacion/flotas', title: 'Flotas', text: 'Registra y administra los vehículos de tu empresa.'},
      {to: '/docs/operacion/conductores', title: 'Conductores', text: 'Registra conductores, licencias y estados.'},
      {to: '/docs/operacion/documentos', title: 'Documentos', text: 'Guarda y controla vencimientos de documentos.'},
      {to: '/docs/operacion/servicios', title: 'Servicios', text: 'Programa viajes, agenda y contactos en el calendario.'},
      {to: '/docs/operacion/mantenimiento', title: 'Mantenimiento', text: 'Planes, órdenes de trabajo e indicadores.'},
      {to: '/docs/operacion/plantillas', title: 'Plantillas', text: 'Genera documentos automáticos desde plantillas.'},
    ],
  },
  {
    heading: 'Primeros pasos y extras',
    text: 'Entrar a Flitware, moverte por la app y conectar herramientas externas.',
    items: [
      {to: '/docs/primeros-pasos/acceso', title: 'Acceso y registro', text: 'Entrar con correo y clave, código 2FA y crear tu cuenta.'},
      {to: '/docs/primeros-pasos/inicio', title: 'Inicio', text: 'Tu panel principal al entrar a la aplicación.'},
      {to: '/docs/primeros-pasos/notificaciones', title: 'Notificaciones', text: 'Avisos importantes de tu operación.'},
      {to: '/docs/primeros-pasos/busqueda', title: 'Búsqueda', text: 'Encuentra vehículos, personas y registros al instante.'},
      {to: '/docs/primeros-pasos/marketplace', title: 'Marketplace', text: 'Aplicaciones extra para tu empresa.'},
      {to: '/docs/primeros-pasos/mcp', title: 'Conexiones de asistentes', text: 'Qué asistentes están conectados a tu empresa.'},
      {to: '/docs/primeros-pasos/portal-conductor', title: 'Portal del conductor', text: 'Lo que ve tu conductor en su acceso público.'},
    ],
  },
];

function GuideList() {
  return (
    <main className={clsx('container', styles.guideList)}>
      <Heading as="h2">Configuración y cuenta</Heading>
      <p>Todo lo necesario para dejar tu cuenta y tu empresa listas para operar.</p>
      <ul className={styles.guideItems}>
        {GUIDES.map((guide) => (
          <li key={guide.to}>
            <Link to={guide.to}>
              <strong>{guide.title}</strong>
            </Link>
            <span>{guide.text}</span>
          </li>
        ))}
      </ul>
      {MORE_GUIDES.map((section) => (
        <div key={section.heading}>
          <Heading as="h2">{section.heading}</Heading>
          <p>{section.text}</p>
          <ul className={styles.guideItems}>
            {section.items.map((guide) => (
              <li key={guide.to}>
                <Link to={guide.to}>
                  <strong>{guide.title}</strong>
                </Link>
                <span>{guide.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}

export default function Home() {
  return (
    <Layout
      title="Guía de usuario"
      description="Guía de usuario de Flitware: configuración, seguridad, facturación y operación de flotas.">
      <HomepageHeader />
      <GuideList />
    </Layout>
  );
}
