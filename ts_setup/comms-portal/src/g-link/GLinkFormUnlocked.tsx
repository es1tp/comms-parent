import { GLinkFormUnlockedProps } from '@dxs-ts/gamut'
import { Link, Typography } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import { useQualifications } from '@/api-site';
import { useExamLink } from '@/g-nav';



export const GLinkFormUnlocked: React.FC<GLinkFormUnlockedProps> = (props) => {

  const { label, value } = props;
  const { findQualificiation } = useQualifications();
  const { navToExam } = useExamLink();
  const link = findQualificiation(value);

  function handleClick() {
    if(link) {
      navToExam(link);
    }
  }
  return (
    <Link onClick={handleClick}>
      <span>
        <ForwardIcon color='info' />
        <Typography>{label} {link ? '' : ' under construction'}</Typography>
      </span>
    </Link>
  )
}
