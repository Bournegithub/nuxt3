<template>
	<div class="common-layout">
    <el-container>
      <el-header>
				<app-header></app-header>
			</el-header>
      <el-container>
        <el-aside width="200px">
					<app-sider></app-sider>
				</el-aside>
        <el-main><slot /></el-main>
      </el-container>
    </el-container>
  </div>
</template>