import { GLinkFormUnlockedProps, useLocale } from '@dxs-ts/gamut'
import { Link, Typography } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import { useQualifications } from '@/api-site';
import { useExamLink } from '@/g-nav';
import { useDb } from '@/api-db';



export const GLinkFormUnlocked: React.FC<GLinkFormUnlockedProps> = (props) => {

  const { label, value } = props;
  const { findQualificiation } = useQualifications();
  const { navToExam } = useExamLink();
  const link = findQualificiation(value);
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
  const name = `${label} (${count})`;

  return (
    <Link onClick={handleClick}>
      <span>
        <ForwardIcon color='info' />
        <Typography>{name} {link ? '' : ' under construction'}</Typography>
      </span>
    </Link>
  )
}
