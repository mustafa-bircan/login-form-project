import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
export default function ErrorPage() {
  const history = useHistory();
  return (
    <div>
      <h2>Kullanıcı mail yada şifre hatalı tekrar deneyin!</h2>
      <Button color="primary" onClick={() => history.push('/')}>
        Anasayfa
      </Button>
    </div>
  );
}