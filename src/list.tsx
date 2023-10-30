const names = ['Thomas', 'Yoann', 'Aly', 'Jeremy'];
const upperCaseNames = names.map((name) => name.toUpperCase())

const List = () => {

    return (
        <div>
            {upperCaseNames.map(( name, i) => {
                return <div key={i} style={{color: i % 2 ? 'black' : 'lightblue'}}>{name}</div>
            })}
        </div>
    );
};

export default List;
