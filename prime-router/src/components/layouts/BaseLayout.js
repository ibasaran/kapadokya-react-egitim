import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';

function BaseLayout() {

  const menu = [
    {
      label:'Pano',
      icon: 'pi pi-align-justify'
    },
    {
      label: 'Hakkımızda',
      icon: 'pi pi-book'
    },
    {
      label: 'Görev Ekle',
      icon: 'pi pi-plus-circle'
    }
  ]

  const solMenu = [
    {
      label: 'Görevler',
      icon: 'pi pi-tablet'
    }
  ]

  const start = <div>
          <img src='https://kapadokya.edu.tr/img/logo.svg' height={40}/>
          <span style={{paddingLeft:10, color:'brown'}}>GÖREV</span>
      </div>

  return (
    <div className="grid">
      <div className='col-12'>
          <Menubar 
            model={menu}
            start={start}  
          />
      </div>
      <div className='col-12'>
          <div className='grid'>
              <div className='col-4'>
                <Menu model={solMenu}/>
              </div>
              <div className='col-8'>

              </div>
          </div>
      </div>
    </div>
  );
}

export default BaseLayout;
