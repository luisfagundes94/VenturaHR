import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm'
import AccountType from '../enums/AccountType'
import JobVacancy from './JobVacancy'
import JobVacancyAnswer from './JobVacancyAnswer'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('enum', { nullable: false, enum: AccountType })
  accountType: AccountType

  @Column()
  name: string

  @Column()
  companyLogo?: string

  @Column()
  companyDescription?: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  phone: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  cpf: string

  @Column()
  cnpj: string

  @OneToMany(type => JobVacancy, user => user.company)
  @JoinColumn({ name: 'job_vacancies' })
  publishedJobs: JobVacancy[] | null

  @OneToOne(type => JobVacancyAnswer, jobVacancyAnswer => jobVacancyAnswer.candidate)
  jobVacancyAnswer: JobVacancyAnswer

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default User
