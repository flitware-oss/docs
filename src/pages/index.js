import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const GUIDES = [
  {
    to: '/docs/fase1/perfil',
    title: 'Mi perfil',
    text: 'Tus datos, tu correo de acceso y la actividad reciente de tu cuenta.',
  },
  {
    to: '/docs/fase1/usuarios',
    title: 'Usuarios',
    text: 'Crea y administra las cuentas de tu equipo: roles, activación y accesos.',
  },
  {
    to: '/docs/fase1/seguridad',
    title: 'Seguridad',
    text: 'Contraseña, doble factor (2FA) y control de sesiones activas.',
  },
  {
    to: '/docs/fase1/tenant',
    title: 'Datos de la empresa',
    text: 'Razón social, zona horaria, correos de alerta y país de facturación.',
  },
  {
    to: '/docs/fase1/campos-personalizados',
    title: 'Campos personalizados',
    text: 'Agrega los datos propios de tu operación a cada módulo.',
  },
  {
    to: '/docs/fase1/facturacion',
    title: 'Facturación',
    text: 'Tu plan, suscripción, facturas y consumo de cada cupo.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--flitware', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.heroLogo}
          src="img/flitware-logo-white.svg"
          alt="Flitware"
          width="220"
        />
        <Heading as="h1" className="hero__title">
          Guía de usuario de Flitware
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/fase1/perfil">
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
        to: '/docs/fase2/soporte',
        title: 'Solicitudes de soporte',
        text: 'Crea solicitudes, conversa con soporte y ciérralas al resolver.',
      },
    ],
  },
  {
    heading: 'Módulos de operación',
    text: 'El día a día de tu flota: vehículos, conductores, documentos, servicios y mantenimiento.',
    items: [
      {to: '/docs/fase3/flotas', title: 'Flotas', text: 'Registra y administra los vehículos de tu empresa.'},
      {to: '/docs/fase3/conductores', title: 'Conductores', text: 'Registra conductores, licencias y estados.'},
      {to: '/docs/fase3/documentos', title: 'Documentos', text: 'Guarda y controla vencimientos de documentos.'},
      {to: '/docs/fase3/servicios', title: 'Servicios', text: 'Programa viajes, agenda y contactos en el calendario.'},
      {to: '/docs/fase3/mantenimiento', title: 'Mantenimiento', text: 'Planes, órdenes de trabajo e indicadores.'},
      {to: '/docs/fase3/plantillas', title: 'Plantillas', text: 'Genera documentos automáticos desde plantillas.'},
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
