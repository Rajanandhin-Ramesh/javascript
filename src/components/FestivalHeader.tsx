type festivalHeaderProps = {festivalName : string,
    day : string,
    openingTime : string
}

function FestivalHeader({festivalName,day,openingTime}:festivalHeaderProps){
    return(
        <header>
            <p>{festivalName}</p>
            <p>{day} </p>
            <p>Gates open at {openingTime}</p>

        </header>
    )
}
export default FestivalHeader;