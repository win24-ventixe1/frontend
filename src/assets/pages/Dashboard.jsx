import Layout from '../components/Layout'

const Dashboard = ({ blurred, openDeveloper }) => {
  return (
    <div className={blurred ? 'dashboard blurred' : 'dashboard'}>
      <Layout title="Dashboard" active="Dashboard">
        <h2>Dashboard</h2>
        <button onClick={openDeveloper} className="developer-btn">
          For Developer
        </button>
      </Layout>
    </div>
  )
}

export default Dashboard
