package com.example.venturahr.domain.model

class JobVacancy(
    val id: String,
    val description: String,
    val companyName: String,
    val city: String,
    val state: String,
    val contractType: String,
    val contractDuration: String,
    val criteriaList: List<String>
)