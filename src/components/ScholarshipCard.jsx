function ScholarshipCard({scholarship}){
return (
    <div ClassName='Card'>
        <h2>{scholarship.title}</h2>
        <p>Filed:{scholarship.filed}</p>
        <p>Dgree:{scholarship.dgree}</p>
        <button>
            APPLY NOW
        </button>
    </div>
);
}
export default ScholarshipCard;