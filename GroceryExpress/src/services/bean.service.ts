import { Injectable } from '@angular/core';
import { Bean } from 'src/app/models/Bean';

@Injectable({
  providedIn: 'root'
})
export class BeanService {

  beanArry: Bean[] = [];
  constructor() { }

  getBean(): Bean[] {
    const retrivedData = localStorage.getItem('bean');
    const parsed = JSON.parse(retrivedData);
    this.beanArry.push(parsed);
    return this.beanArry;
  }

  addBean(bean: Bean) {
    this.beanArry.push(bean);
    localStorage.setItem('bean', JSON.stringify(this.beanArry));
  }

  clearBean() {
    localStorage.removeItem('bean');
  }

  removeBeanItem(id: number) {
    this.getBean();
    this.beanArry = this.beanArry.filter(x => x.id !== id);
    localStorage.setItem('bean', JSON.stringify(this.beanArry));
  }
}
