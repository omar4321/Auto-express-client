import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

export default function DashboardStatus() {
  const { user } = useAuth();
  return (
    <div className="col-md-12 pt-4" style={{ backgroundColor: '#fff' }}>
      <Row>
        <div className="col-md-8 col-8 col-sm-8 pl-5">
          <img className="rounded-circle mb-3" src={user.photoURL} alt="" />
        </div>
        <div className="col-md-4 col-4 col-sm-4 text-right pr-5">
          <p>{user.displayName}</p>
        </div>
      </Row>
    </div>
  );
}
