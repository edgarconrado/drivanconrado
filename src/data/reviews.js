// Las 3 primeras se muestran siempre (con animación al hacer scroll);
// las demás (`hidden: true`) aparecen con el botón "Ver más reseñas".
export const REVIEWS = [
  {
    initial: 'A',
    name: 'Alejandra Cigarroa',
    date: 'Hace 3 meses',
    delay: 0,
    text: '"Excelente médico muy recomendado, muy buena atención y calidad humana, el mejor Dr. Iván Conrado."',
  },
  {
    initial: 'I',
    name: 'Isa Cortez Galarza',
    date: 'Hace 1 mes',
    delay: 100,
    text: '"Increíble su capacidad para generar confianza, brindar información clara y acompañar al paciente durante todo su proceso, lo recomiendo ampliamente."',
  },
  {
    initial: 'E',
    name: 'Erick Jasso',
    date: 'Hace 5 meses',
    delay: 200,
    text: '"Es un excelente doctor, se nota que ha tenido una gran preparación académica, realmente recibí una atención de calidad, aclaró todas mis dudas y siempre pendiente del seguimiento. 100% recomendado."',
  },
  {
    initial: 'V',
    name: 'Valeria Hernández',
    date: 'Hace 3 meses',
    hidden: true,
    text: '"Excelente trato, muy buen doctor, lo recomiendo mucho. 10 de 10."',
  },
  {
    initial: 'P',
    name: 'Patricia Hinojosa Torres',
    date: 'Hace 3 meses',
    hidden: true,
    text: '"Excelente trato, seguridad, aclara tus dudas. Muy profesional en su servicio y excelente ser humano."',
  },
  {
    initial: 'D',
    name: 'Dr. Cáncer Lozoya',
    date: 'Hace 3 meses',
    hidden: true,
    text: '"Gran especialista y con grandes instalaciones. Yo como paciente recomiendo al Dr porque me dio un diagnóstico adecuado."',
  },
]
