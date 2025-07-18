import styles from './List.module.css'

function List({items = [], category = "Category"}){
    
    const itemCategory = category;
    const itemList = items;

    const listItems = itemList.map(x => <li key={x.id}>{x.name} | ${x.price}</li>);
    

    return(<><h3 className={styles.title}>{itemCategory}</h3><ol className={styles.list}>{listItems}</ol></>);
}

export default List;