import { ExamApi } from "@/api-exam";
import { GQuestionnaire } from "@/g-questionnaire";
import { GFormProps, useSite } from "@dxs-ts/gamut";


export const GForm: React.FC<{className: string, ownerState: GFormProps}> = (props) => {  
  const { getLink } = useSite();  
  const id = props.ownerState.executionId;
  const examLink = getLink(id);

  return (
    <ExamApi.ExamProvider link={examLink}>
      <GQuestionnaire />
    </ExamApi.ExamProvider>
  )
}