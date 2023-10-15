import { PageImgSize } from './components/imageSizeExercise/PageImgSize.tsx';
import { PageHeaders } from './components/HeadersExercise/Page.tsx';

export default function App() {
  return (
    <div className="containerExe">
      <div className="exe1">
        <PageImgSize></PageImgSize>
      </div>
      <div className="exe2">
        <PageHeaders></PageHeaders>
      </div>
    </div>
  )
}
