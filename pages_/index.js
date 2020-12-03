import useTranslation from 'next-translate/useTranslation'
// ...
export default function Index () {
  const { t, lang } = useTranslation()
  const example = t('home:greet')
// ...
  return <div>{example}</div>
}
