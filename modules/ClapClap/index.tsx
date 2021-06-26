import axios from 'axios';
import { useState } from 'react';
import IconButton from '../../common/components/IconButton';
import styles from './index.module.scss';

const ClapClap = ({claps}) => {
    const [clapsCount, setClapsCount] = useState(claps)

    const handleClapClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/claps/`);
            setClapsCount(response.data.count)
            
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <div className={styles['clap']}>
            <IconButton name="clap" onClick={handleClapClick} sizes={{width: 16, height: 16}} className={[styles['clap__button']]} />
            <div className={styles['clap__count']}>{clapsCount} <span>Claps Collected</span></div>
            <p>This is a &quot;free to hit&quot; clap.</p>
            <p>It&apos;s kinda Spirit Ball&apos;s thing</p>
        </div>
    )
}
  
export default ClapClap;