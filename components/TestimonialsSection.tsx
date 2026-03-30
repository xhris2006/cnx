const testimonials = [
  {
    name: 'Nadine',
    role: 'Student',
    quote: 'CNX m aide a retrouver rapidement des documents fiables pour preparer mes examens.',
  },
  {
    name: 'Bryan',
    role: 'Engineering Student',
    quote: 'La plateforme simplifie l acces aux ressources partagees entre etudiants.',
  },
  {
    name: 'Aicha',
    role: 'Masters Student',
    quote: 'Le systeme de compte et la presentation sont deja une bonne base pour une vraie app campus.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600">
            Quelques retours qui illustrent la valeur attendue de la plateforme.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <p className="mb-4 text-gray-700">"{item.quote}"</p>
              <footer>
                <div className="font-semibold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-500">{item.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
