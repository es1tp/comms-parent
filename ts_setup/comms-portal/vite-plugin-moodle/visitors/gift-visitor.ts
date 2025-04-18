import { Md5 } from 'ts-md5';
import { ErauApi } from '../../src/api-erau';


const LINE_SEPARATOR = '\r\n';

function parseQuestionId(question: ErauApi.ErauQuestion): string {
  /*
  const [questionId] = question.id
    .split("_")
    .filter(e => e.startsWith("eq") || e.startsWith("q"))
    
    .map(e => e.replace( /(^.+)(\w\d+\w)(.+$)/i,'$2'))
    .filter(e => e.trim().length > 0);
    */
  return question.id;
}

export class GiftVisitor {
  private _gift_lines: string[] = [];
  private _exam_name: string;
  private _module_lines: string[] = [];
  private _visited_questions_ids: string[] = [];

  constructor(exam_name: string) {
    this._exam_name = exam_name; //'ERAÜ D-kategooria eksam'
  }

  public visit(subject: ErauApi.ErauSubject) {
    const usedQuestions = subject.questions.filter(q => q.type !== 'formula');
    console.log(`  - adding subject: ${subject.title} - ${subject.id}`)

    usedQuestions.forEach(q => {
      this.visitGiftCategory(subject, q);
      this.visitGiftQuestion(q);
    });

    this.visitModule(subject, usedQuestions);
  }

  public close() {


    const gift = this._gift_lines.join(LINE_SEPARATOR)
    const module_names = this._module_lines.join(LINE_SEPARATOR);

    const md5 = new Md5();
    md5.appendStr(this._gift_lines.join(''))
    const version = md5.end();

    const versionComment = `// MD5: ${version}`;

    return {
      gift: [versionComment, gift].join(LINE_SEPARATOR),
      module_names
    }
  }

  private visitModule(subject: ErauApi.ErauSubject, usedQuestions: ErauApi.ErauQuestion[]) {
    
    const code = subject.articleId;
    const title = subject.title;
    const count = usedQuestions.length;

    this._module_lines.push(
`    ${code} - ${title} (${count})  `
    );
  }

  private visitGiftCategory(subject: ErauApi.ErauSubject, question: ErauApi.ErauQuestion) {
    const category = this._exam_name;
    const categoryId = subject.articleId;
    const questionId = parseQuestionId(question);
    console.log(`    - adding question: ${questionId}`)
    console.log(`      src: ${question.id}`)


    this._gift_lines.push(`// question: ${questionId ?? question.id} name: ${question.id}`);
    this._gift_lines.push(`$CATEGORY: $course$/top/${category}/${categoryId}`);
    this._gift_lines.push('');
  }
  

  private visitGiftQuestion(question: ErauApi.ErauQuestion) {
    const questionText = question.text;
    const questionId = parseQuestionId(question);
    if(this._visited_questions_ids.includes(questionId)) {
      throw new Error(`Failed to generate gift because question id: ${questionId} us not unique for source: ${question.id}!`)
    }

    this._visited_questions_ids.push(questionId);

    this._gift_lines.push(`::${questionId}::[html]<p dir\="ltr" style\="text-align\: left;">${questionText}<br></p>{`);
    question.answers.sort((a, b) => Number(b.isCorrect) - Number(a.isCorrect)).forEach(answer => this.visitGiftAnswer(question, answer))
    this._gift_lines.push('}')
    this._gift_lines.push('')
  }
  private visitGiftAnswer(question: ErauApi.ErauQuestion, answer: ErauApi.ErauAnswer) {
    const isCorrect: boolean = answer.isCorrect;
    const answerText = answer.text;
    const symbolForFalsy = isCorrect ? '=': '~';
    this._gift_lines.push(`${symbolForFalsy}<p dir\="ltr" style\="text-align\: left;">${answerText}<br></p>`);
  }
}
