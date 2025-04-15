import { GLinkFormUnlockedSearchResultsProps, useLocale } from '@dxs-ts/gamut'
import { Link, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useQualifications } from '@/api-site';
import { useExamLink } from '@/g-nav';
import { useDb } from '@/api-db';


export const GLinkFormSearchResult: React.FC<Omit<GLinkFormUnlockedSearchResultsProps, 'component' | 'slots'>> = (props) => {


  const { findQualificiation } = useQualifications();
  const { navToExam } = useExamLink();
  const link = findQualificiation(props.value);
  const { locale } = useLocale();
  const db = useDb();

  function handleClick() {
    if(link) {
      navToExam(link);
    }
  }

  const count = link ? db
    .questionnaires({locale, qualification: link?.value})
    .flatMap(q => q.questions)
    .length : 0
  const name = `${link?.name} (${count})`;

  return (
    <Link onClick={handleClick}>
      <span>
        <CircleIcon color='info' sx={{ height: '10px', width: '10px' }} />
        <Typography>{props.label}</Typography>
      </span>
    </Link>
  )
}