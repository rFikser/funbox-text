import React from 'react';
import {render} from 'react-dom';

function Card(props) {
	const {title, name, type, description, portions, mouses, weight, satisfied, image, code, checked, disabled} = props.card;

	return (
    <React.Fragment>
      <input className="card-check" type="checkbox" id={code} defaultChecked={checked} disabled={disabled} name="product"></input>
    	<div className="card" data-product={code} onClick={cardClick} onMouseLeave={cardLeave}>
    		<div className="card__background" style={{backgroundImage: 'url(' + image + ')'}}></div>
    		<div className="card__title">{title}</div>
    		<div className="card__title on-hover">Котэ не одобряет?</div>
    		<div className="card__name">{name}</div>
    		<div className="card__type">{type}</div>
    		<div className="card__present">{portions} {mouses} в подарок</div>
    		<div className="card__weight">
    			<span className="count">{weight}</span>
    			<span className="dimension">кг</span>
    		</div>
    	</div>
    </React.Fragment>
  )
}

function cardClick(e) {
  let product = e.currentTarget.dataset.product;
  let checkbox = document.getElementById(product);

  e.preventDefault();

  if (!checkbox.disabled) {
    if (checkbox.indeterminate && !checkbox.checked) {
      checkbox.indeterminate = false;
    } else if (!checkbox.indeterminate && !checkbox.checked) {
      checkbox.indeterminate = true;
    } else if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
}

function cardLeave(e) {
  let product = e.currentTarget.dataset.product;
  let checkbox = document.getElementById(product);

  if (!checkbox.disabled && checkbox.indeterminate) {
    checkbox.indeterminate = false;
    checkbox.checked = true;
  }
}

export default Card
