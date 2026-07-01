-- CreateTable
CREATE TABLE "command_configs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "guild_id" TEXT NOT NULL,
    "command_name" TEXT NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT true,
    "rules" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "command_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interaction_logs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "guild_id" TEXT,
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "interaction_type" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "payload" JSONB,
    "mirror_status" TEXT NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interaction_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback_logs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "guild_id" TEXT,
    "user_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "feedback_text" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'UNREAD',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedback_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "command_configs_guild_id_command_name_key" ON "command_configs"("guild_id", "command_name");

-- CreateIndex
CREATE INDEX "interaction_logs_guild_id_idx" ON "interaction_logs"("guild_id");

-- CreateIndex
CREATE INDEX "interaction_logs_user_id_idx" ON "interaction_logs"("user_id");

-- CreateIndex
CREATE INDEX "feedback_logs_guild_id_idx" ON "feedback_logs"("guild_id");
