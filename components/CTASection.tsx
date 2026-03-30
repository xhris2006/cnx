import Link from 'next/link'

export function CTASection() {
  return (
    <section className="bg-primary-800 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to launch your student platform?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/85">
          Cree un compte, teste le parcours d inscription et prepare le deploiement sur Vercel.
        </p>
        <Link
          href="/register"
          className="inline-flex rounded-lg bg-white px-8 py-3 font-semibold text-primary-800 transition hover:bg-gray-100"
        >
          Create an account
        </Link>
      </div>
    </section>
  )
}
