import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Card from "../../Card/Card";
import { landingsContext } from '../../../../context/landingsContext';
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import { useTable, Table } from 'react-table'

function LandingList() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { landings, setLandings } = useContext(landingsContext);//Almacenar fetch de all landings
  const { filter, setFilter } = useContext(landingsContext);
  const landingSlice = landings.slice(0, 10);

  const deleteLanding = (i) => {
    // //filter
    // const remainingPokemones = pokemones.filter((pokemon, j) => i !== j);
    // setPokemones(remainingPokemones);
    // console.log(pokemones);
  }

  return (
    <div>
      <h1>Registra un nuevo Landing</h1>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <fieldset>
          <div>
            <label id="id">ID</label>
            <input
              id="outlined-basic"
              label="id"
              variant="outlined"
              {...register("id", { required: true, valueAsNumber: true })}
              type="number"
              name="id"
              placeholder="2000"
            />
            <p>{errors.id?.message}</p>
          </div>
          <div>
            <label id="name">Nombre</label>
            <input
              id="outlined-basic"
              label="name"
              variant="outlined"
              {...register("name", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="name"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>

            <input
              id="outlined-basic"
              label="nametype"

              type="hidden"
              name="nametype"
              value="Valid"
            />

          </div>
          <div>
            <label id="name">Recclass</label>
            <input
              id="outlined-basic"
              label="reclass"
              variant="outlined"
              {...register("reclass", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="reclass"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label id="name">Masa (g)</label>
            <input
              id="outlined-basic"
              label="mass"
              variant="outlined"
              {...register("mass", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="number"
              name="mass"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label id="name">Fall</label>
            <input
              id="outlined-basic"
              label="fall"
              variant="outlined"
              {...register("fall", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="fall"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label id="name">Fecha</label>
            <input
              id="outlined-basic"
              label="year"
              variant="outlined"
              {...register("year", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="date"
              name="year"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label id="name">reclat</label>
            <input
              id="outlined-basic"
              label="reclat"
              variant="outlined"
              {...register("reclat", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="reclat"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label id="name">reclong</label>
            <input
              id="outlined-basic"
              label="reclong"
              variant="outlined"
              {...register("reclong", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="reclong"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label >Localizacion</label><br></br>
            <label>Latitud</label>
            <input
              id="outlined-basic"
              label="latitude"
              variant="outlined"
              {...register("latitude", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="latitude"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>
            <label>Longitud</label>
            <input
              id="outlined-basic"
              label="longitude"
              variant="outlined"
              {...register("longitude", { required: true, minLength: { value: 2, message: "El nombre del nuevo Pokemon debe ser mayor de 2 caracteres." } })}
              type="text"
              name="longitude"
              placeholder="Rokamon"
            />
            <p>{errors.name?.message}</p>

          </div>


          <div>
            <button type="submit">Create</button>
          </div>
        </fieldset>
      </form>
      <hr></hr>
      <h1>Listado de todos los Landings registrados</h1>
      {landingSlice.map((landing, i) => <Card value={landing} key={uuidv4()} delete={() => deleteLanding(i)} index={i} />
      )}
    </div>
  )
}

export default LandingList