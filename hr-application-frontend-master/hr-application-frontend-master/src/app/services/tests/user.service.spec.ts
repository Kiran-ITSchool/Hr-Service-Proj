import { TestBed } from '@angular/core/testing';
import { async, ComponentFixture} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { TokenService } from 'app/services/token.service';
import { HttpClient } from 'selenium-webdriver/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Token } from '@angular/compiler';
import { BaseRequestOptions } from '@angular/http';
import {NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [TokenService],
      schemas:[NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));


  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
